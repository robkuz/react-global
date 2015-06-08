var React = require('react'),
    serialize = require('serialize');

var Global = React.createClass({
  statics: {
    get: function(name) {
      return window[name];
    }
  },

  shouldComponentUpdate: function() {
    return false;
  },

  getScript: function() {
    var script = '';
    for (var key in this.props.values || {}) {
      script += 'var ' + key + '=' + serialize(this.props.values[key]) + ';';
    }
    return script;
  },

  render: function() {
    return React.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: {
        __html: this.getScript()
      }
    });
  }
});

module.exports = Global;
