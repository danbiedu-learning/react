/* 
* programmatic history
* 이유 : 직접 control하기 위해서 컴포넌트를 따로 생성함 <Route history={history}>
* Usage : history.push가 필요한 곳에 import history from '../history'와 같은 형태로 불러서 사용한다.
*/
import { createBrowserHistory } from 'history';

export default createBrowserHistory();