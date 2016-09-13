/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./layout.scss');

 class Columns4 extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">{this.props.columnValues[0]}</div>
                <div className="col-lg-3 col-md-6 col-sm-12">{this.props.columnValues[1]}</div>
                <div className="col-lg-3 col-md-6 col-sm-12">{this.props.columnValues[2]}</div>
                <div className="col-lg-3 col-md-6 col-sm-12">{this.props.columnValues[3]}</div>
            </div>
        );
    }
}
 class Columns3 extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">{this.props.columnValues[0]}</div>
                <div className="col-lg-4 col-md-4 col-sm-12">{this.props.columnValues[1]}</div>
                <div className="col-lg-4 col-md-4 col-sm-12">{this.props.columnValues[2]}</div>
            </div>
        );
    }
}

 class Columns2 extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">{this.props.columnValues[0]}</div>
                <div className="col-lg-6 col-md-6 col-sm-12">{this.props.columnValues[1]}</div>
            </div>
        );
    }
}
 class Columns1 extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">{this.props.columnValues[0]}</div>
            </div>
        );
    }
}
Columns4.propTypes = { columnValues: React.PropTypes.array};
Columns3.propTypes = { columnValues: React.PropTypes.array};
Columns2.propTypes = { columnValues: React.PropTypes.array};
Columns1.propTypes = { columnValues: React.PropTypes.array};


module.exports = {
    Columns4,
    Columns3,
    Columns2,
    Columns1
};