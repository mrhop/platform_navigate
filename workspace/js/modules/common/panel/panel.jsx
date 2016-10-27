/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./panel.scss');

class DefaultPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {panelActionCallBack: {}};
        this.childrenWithProps = React.Children.map(this.props.children,
            (child) => {
                if (child.type == "button" || child.type == "div") {
                    return child
                } else {
                    return React.cloneElement(child, {
                        panelActionCallBack: this.state.panelActionCallBack
                    })
                }
            }
        );
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="panel" ref={(ref) => this.panelDom = ref}
                 onClick={this.state.panelActionCallBack.clickEvent}>
                <div className="panel-body">
                    {this.childrenWithProps}
                </div>
            </div>
        )
            ;
    }
}

class PanelWithHeader extends DefaultPanel {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="panel" ref={(ref) => this.panelDom = ref}
                 onClick={this.state.panelActionCallBack.clickEvent}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.panelValues.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.panelValues.content}
                    {this.childrenWithProps}
                </div>
            </div>
        );
    }
}

DefaultPanel.propTypes = {panelValues: React.PropTypes.object};
PanelWithHeader.propTypes = {panelValues: React.PropTypes.object};
//panelValues title,content,button-value

module.exports = {
    DefaultPanel,
    PanelWithHeader
};