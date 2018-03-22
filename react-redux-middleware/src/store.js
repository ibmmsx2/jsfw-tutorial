import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/* === case 1 === */
//import loggerMiddleware from './lib/loggerMiddleware';

// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
//const store = createStore(modules, applyMiddleware(loggerMiddleware))

/* === case 2 === 
    로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
    https://github.com/evgenyrodionov/redux-logger#options
*/

//const logger = createLogger();
//const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

/* === case 3=== 
    프로미스 기반의 비동기 작업을 조금 더 편하게 해주는 미들웨어
    프로미스가 payload 로 전달되면, 요청이 시작, 성공, 실패 할 때 액션의 뒷부분에
    _PENDING, _FULFILLED, _REJECTED 를 반환
    (아래 예제는 접미사의 이름을 커스터마이징함)
*/
import promiseMiddleware from 'redux-promise-middleware';
const logger = createLogger();
const customizedPromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
})
const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware));

export default store;
