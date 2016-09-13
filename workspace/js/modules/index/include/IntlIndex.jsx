/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./IntlIndex.scss');
class IntlIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var columns = [
                <div className="panel">
                    <div className="panel-body">
                        <h4>{this.props.intl.formatMessage({id:'platform.user.title'})}</h4>
                        <button className="btn btn-primary">
                            {this.props.intl.formatMessage({id:'platform.enter'})}<span className="right"></span>
                        </button>
                    </div>
                </div>,
                <div className="panel">
                    <div className="panel-body">
                        <h4>{this.props.intl.formatMessage({id:'platform.cms.title'})}</h4>
                        <button className="btn btn-primary">
                            {this.props.intl.formatMessage({id:'platform.enter'})}<span className="right"></span>
                        </button>
                    </div>
                </div>,
                <div className="panel">
                    <div className="panel-body">
                        <h4>{this.props.intl.formatMessage({id:'platform.crm.title'})}</h4>
                        <button className="btn btn-primary">
                            {this.props.intl.formatMessage({id:'platform.enter'})}<span className="right"></span>
                        </button>
                    </div>
                </div>,
            ]
            ;
        return (
            <div className="index-block">
                <Layout.Columns3 columnValues={columns}/>
            </div>
        );
    }
}
export  default ReactIntl.injectIntl(IntlIndex);