export class GridColumn {

  specialColumns = ['heading', 'nosort'];

  constructor(config, template, parent) {
    this.template = template;
    this.field = config.field;
    this.parent = parent;

    if (!this.field)
      throw new Error('field is required');

    this.heading = config.heading || config.field;
    this.nosort = config.nosort || false;
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
      return {
        from: this.filterValueFrom,
        to: this.filterValueTo
      };
    } else {
      return this.filterValue;
    }
  }

}
