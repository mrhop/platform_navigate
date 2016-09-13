/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./tab.scss');

class BasicTab extends React.Component {
    constructor(props) {
        super(props);
    }

    //need the basic functions to show and hide content

    componentDidMount() {
        var aList = this.modalDom.querySelectorAll('.nav-tabs li.tab-a');
        for (var i = 0; i < aList.length; i++) {
            if (!aList[i].classList.contains('with-dropdown')) {
                aList[i].addEventListener('click', function (modalDom) {
                    var panelContent = modalDom.querySelector('.tab-content ' + this.getAttribute('data-related'));
                    var panelContentParent = null;
                    var aParent = null;
                    if (this.getAttribute('data-related-parent')) {
                        panelContentParent = modalDom.querySelector('.tab-content ' + this.getAttribute('data-related-parent'));
                        aParent = this.parentNode.parentNode;
                    }
                    var panelContentList = modalDom.querySelectorAll('.tab-content .active');
                    if (panelContentList) {
                        for (var i = 0; i < panelContentList.length; i++) {
                            if (panelContentList[i] !== panelContentParent && panelContentList[i] !== panelContent) {
                                panelContentList[i].classList.remove('active');
                            }
                        }
                    }
                    if (panelContentParent) {
                        panelContentParent.classList.add('active');
                    }
                    panelContent.classList.add('active');
                    //active the a tab
                    var aList = modalDom.querySelectorAll('.tab-a.active');
                    if (aList) {
                        for (var j = 0; j < aList.length; j++) {
                            if (aList[j] !== this && aList[j] !== aParent) {
                                aList[j].classList.remove('active');
                            }
                        }
                    }
                    if (aParent) {
                        aParent.classList.add('active');
                    }
                    this.classList.add('active');
                }.bind(aList[i], this.modalDom));
            }
        }
    }


    renderBasic(tabExtraClass) {
        var classNames = require('classnames');
        var tabClass = classNames('tab',{'with-minheight':this.props.minHeight}, tabExtraClass);
        var tabItems = this.props.tabValues.map(function (subItem, index) {
            var liClass = classNames('tab-a',{'with-dropdown':subItem.children}, {'active': subItem.active});
            var subItems = null;
            if (subItem.children) {
                subItems = subItem.children.map(function (subItem, index) {
                    var liClass = classNames('tab-a tab-sub-a', {'active': subItem.active});
                    return (<li key={subItem.id} className={liClass} data-related-parent={ '.tab-panel-' + this.parentIndex}
                                data-related={ '.tab-panel-' + this.parentIndex + '-' + index}>{subItem.title}
                    </li>);
                }.bind({parentIndex: index}));
            }
            return (
                <li key={subItem.id} className={liClass} data-related={ '.tab-panel-' + index}>
                    {subItem.title}
                    {subItems ? <ul className="dropdown-menu">{subItems}</ul> : null}
                </li>
            );
        }, this);
        var contentItems = this.props.tabValues.map(function (subItem, index) {
            var divClass = classNames('tab-panel', 'tab-panel-' + index, {'active': subItem.active});
            var subItems = null;
            if (subItem.children) {
                subItems = subItem.children.map(function (subItem, index) {
                    var divClass = classNames('sub-tab-panel', 'tab-panel-' + this.parentIndex + '-' + index, {'active': subItem.active});
                    return (<div key={subItem.id} className={divClass}>{subItem.content}</div>);
                }.bind({parentIndex: index}));
            }
            return (
                <div key={subItem.id} className={divClass}>
                    {subItems ? subItems : subItem.content}
                </div>
            );
        }, this);
        var style = null;
        if(this.props.minHeight){
            style = {height:1,
                     minHeight:this.props.minHeight
            };
        }

        return (
            <div className={tabClass} style={style} ref={(ref) => this.modalDom = ref}>
                <ul className="nav nav-tabs">
                    {tabItems}
                </ul>
                <div className="tab-content">
                    {contentItems}
                </div>
            </div>
        );
    }
}


class DefaultTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic()
        );
    }
}

class LeftVerticalTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic('left-vertical')
        );
    }
}

class RightVerticalTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic('right-vertical')
        );
    }
}

DefaultTab.propTypes = {tabValues: React.PropTypes.array,minHeight:React.PropTypes.number};
LeftVerticalTab.propTypes = {tabValues: React.PropTypes.array,minHeight:React.PropTypes.number};
RightVerticalTab.propTypes = {tabValues: React.PropTypes.array,minHeight:React.PropTypes.number};
//tabValues title\ & related-content multi- and sub title, sub content
//hor, then ver then others

module.exports = {
    DefaultTab,
    LeftVerticalTab,
    RightVerticalTab
};