/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./IntlIndex.scss');
class IntlIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {columns: null}
    }
    componentDidMount(){
        fetch(baseUrl ? (baseUrl + "platform") : "platform", {
            method: 'GET'
        }).then(response => response.text().then(function (text) {
                if (text) {
                    var json = JSON.parse(text);
                    return {json, response}
                } else {
                    return {response}
                }
            }
        )).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            if (json) {
                return json
            } else {
                return null;
            }
        }).then(response => {
            var columns = [];
            if (response && response.length) {
                for (var i = 0; i < response.length; i++) {
                    var title = null;
                    if (response[i].name == "userPlatform") {
                        title = this.props.intl.formatMessage({id: 'platform.user.title'});
                    } else if (response[i].name == "cmsPlatform") {
                        title = this.props.intl.formatMessage({id: 'platform.cms.title'});
                    } else if (response[i].name == "crmPlatform") {
                        title = this.props.intl.formatMessage({id: 'platform.crm.title'});
                    }
                    columns[i] = (<div className="panel">
                        <div className="panel-body">
                            <h4>{title}</h4>
                            <div className="bottom-button-wrapper">
                                <a className="btn btn-primary" href={response[i].url}>
                                    {this.props.intl.formatMessage({id: 'platform.enter'})}<span
                                    className="right"></span>
                                </a>
                            </div>
                        </div>
                    </div>)
                }
                this.setState({columns: columns});
            }
        });
    }
    render() {
        return (
            <div className="index-block">
                {this.state.columns ? <Layout.Columns3 columnValues={this.state.columns}/> : null}
            </div>
        );
    }
}
export  default ReactIntl.injectIntl(IntlIndex);