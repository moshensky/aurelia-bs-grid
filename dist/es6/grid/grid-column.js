export class GridColumn {

  specialColumns = ['heading', 'nosort'];

  constructor(config, template, parent) {
    this.template = template;
    this.field = config.field;
    this.parent = parent;

    if (!this.field)
      throw new Error('field is required');

    this.heading = config.heading || config.field;
    this.nosort = config.nosort !== undefined;
    this.sortDirection = undefined;

    this.filterValue = undefined;
    this.filterValueFrom = undefined;
    this.filterValueTo = undefined;
    this.showInputFilter = config['input-filter'] === 'true';
    this.showDateFilter = config['date-filter'] === 'true';
    this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
    this.showBooleanFilter = config['boolean-filter'] === 'true';
    this.showSelect2Filter = config['select2-filter'] === 'true';
    this.select2Items = config['select2-items'];

    // Set attributes
    for (var prop in config) {
      if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
        this[prop] = config[prop];
      }
    }

  }

  changeDirectionSort() {
    switch (this.sortDirection) {
      case 'asc':
        this.sortDirection = 'desc';
        break;
      case 'desc':
        this.sortDirection = undefined;
        break;
      default:
        this.sortDirection = 'asc';
        break;
    }

    this.parent.changeSort({
      name: this.field,
      value: this.sortDirection
    });
  }

  updateFilters() {
    this.parent.updateFilters();
  }

  hasFilterValue() {
    if (this.showDateFromToFilter === true) {
      return this.filterValueFrom !== undefined || this.filterValueTo !== undefined;
    } else {
      return this.filterValue !== undefined;
    }
  }

  toggleBooleanFilter() {
    if (this.filterValue === undefined) {
      this.filterValue = true;
    } else {
      this.filterValue = !this.filterValue;
    }

    this.updateFilters();
  }

  clearBooleanFilter() {
    this.filterValue = undefined;
    this.updateFilters();
  }

  getFilterValue() {
    if (this.showDateFromToFilter === true) {
      if (this.filterValueFrom && this.filterValueTo) {
        return [{
          name: `${this.field}From`,
          value: this.filterValueFrom.format('YYYY-MM-DD'),
          type: '>',
          valueType: 'date'
        }, {
          name: `${this.field}To`,
          value: this.filterValueTo.format('YYYY-MM-DD'),
          type: '<',
          valueType: 'date'
        }];
      } else if (this.filterValueFrom) {
        return [{
          name: `${this.field}From`,
          value: this.filterValueFrom.format('YYYY-MM-DD'),
          type: '>',
          valueType: 'date'
        }];
      } else if (this.filterValueTo) {
        return [{
          name: `${this.field}To`,
          value: this.filterValueTo.format('YYYY-MM-DD'),
          type: '<',
          valueType: 'date'
        }];
      }
    } else if (this.filterValue !== undefined) {
      let result = [{
        name: this.field,
        value: this.filterValue
      }];
      if (this.showBooleanFilter) {
        result[0].type = '=';
        result[0].valueType = 'boolean';
      } else if (this.showSelect2Filter) {
        result[0].type = '=';
        result[0].valueType = 'int';
      } else if (this.showInputFilter) {
        result[0].type = 'like';
        result[0].valueType = 'string';
      }

      return result;
    }

    return [];
  }

  getQueryString() {
    if (this.showDateFromToFilter === true) {
      if (this.filterValueFrom && this.filterValueTo) {
        return `${this.field}From=${this.filterValueFrom.unix()*1000}&${this.field}To=${this.filterValueTo.unix()*1000}`;
      } else if (this.filterValueFrom) {
        return `${this.field}From=${this.filterValueFrom.unix()*1000}`;
      } else if (this.filterValueTo) {
        return `${this.field}To=${this.filterValueTo.unix()*1000}`;
      } else {
        return undefined;
      }
    } else if (this.filterValue){
      return `${this.field}=${this.filterValue}`;
    } else {
      return undefined;
    }
  }
}
