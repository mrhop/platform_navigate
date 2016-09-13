/**
 * Created by Donghui Huo on 2016/5/11.
 */
import IntlIndex from './include/IntlIndex.jsx';
ReactDOM.render(
    <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('index')}>
        <IntlIndex/>
    </ReactIntl.IntlProvider>,
    document.querySelector('.index-main')
)