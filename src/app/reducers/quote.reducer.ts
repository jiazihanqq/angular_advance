import * as quoteAction from "../action/quote.action";
import { Quote } from "../domain/quota.model";

// 状态类
export interface State {
  quote:Quote
};
// 初始的状态
export const initialState: State = {
  quote:{
    cn: '满足感在于不断的努力，而不是现有成就。全心努力定会胜利满满。',
    en: 'Satisfaction lies in the effort, not in the attainment. Full effort is full victory. ',
    pic: 'assets/img/quote_fallback.jpg',
  }
};
// 接受一个状态，和action，返回一个对象，即为新的状态，
export function reducer(state = initialState, action: {type:string; payload: any} ): State {
  switch (action.type) {
    case quoteAction.QUOTE_SUCCESS: {
      // 返回拓展后的对象
      return {...state, quote: action.payload};
    }
    case quoteAction.QUOTE_FAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
}
