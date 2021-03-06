'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table2 = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTablesTable = function (_Table) {
  (0, _inherits3.default)(DataTablesTable, _Table);

  function DataTablesTable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DataTablesTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DataTablesTable.__proto__ || (0, _getPrototypeOf2.default)(DataTablesTable)).call.apply(_ref, [this].concat(args))), _this), _this.onCellDoubleClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellDoubleClick) _this.props.onCellDoubleClick(rowNumber, columnNumber, event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DataTablesTable, [{
    key: 'createTableBody',
    value: function createTableBody(base) {
      return _react2.default.cloneElement(base, {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellDoubleClick: this.onCellDoubleClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
        style: (0, _assign2.default)({ height: this.props.height }, base.props.style)
      });
    }
  }]);
  return DataTablesTable;
}(_Table2.Table);

exports.default = DataTablesTable;