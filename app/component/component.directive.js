const $inject = [];
class SparklinesDirective {
  constructor(injects) {
    SparklinesDirective.directiveFactory.$inject.forEach((item, index) => {
      SparklinesDirective[item] = injects[index];
    });
    this.restrict = 'EA';
    this.scope = {
      data: '=',
      options: '='
    };
    this.template = `<span></span>`;
  }

  link(scope, elem, attrs) {
    let opts = {};
    let model;

    opts.type = attrs.type || 'line';

    scope.$watchCollection('data', newVal => {
      if (newVal) {
        model = newVal;
        render(newVal, null);
      }
    });

    scope.$watch('options', newVal => {
      if (newVal) {
        render(model, newVal);
      }
    });

    function render(data, options) {
      if(options) {
        angular.extend(opts, options);
      }

      $(elem).find('span').sparkline(data, opts);
    }
  }

  static directiveFactory(...injects) {
    SparklinesDirective.instance = new SparklinesDirective(injects);
    return SparklinesDirective.instance;
  }
}
SparklinesDirective.directiveFactory.$inject = $inject;
export default SparklinesDirective;
