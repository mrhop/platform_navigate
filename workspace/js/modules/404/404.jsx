/**
 * Created by Donghui Huo on 2016/5/6.
 */

require('./404.scss');

class ErrorPage404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1><ReactIntl.FormattedMessage id='404.error'/></h1>

                <p><ReactIntl.FormattedMessage id='404.sorrySentence'/><a href={baseUrl}><ReactIntl.FormattedMessage
                    id='404.backHome'/></a></p>
            </div>
        );
    }
}

ReactDOM.render(
    <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('404')}>
        <ErrorPage404 />
    </ReactIntl.IntlProvider>,
    document.querySelector('.page-not-found-modal')
);

