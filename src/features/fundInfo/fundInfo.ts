import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { mock } from '../../../mock'

export interface FundState {
    name?:string,
    year?:string,
    acronym?:string,
    price?: string,
    increaseByPorcent?:string,
    AUM?: string,
    issueDate?: string,
    vintageRange?: string,
    TER?: string,
    priceAtClose?: string,
    priceAtOpen?: string
    credits?:string,
    lastPurchase?: string,
    charts:any
}

const initialState: FundState = mock.funds[0]

export const fundSlice = createSlice({
  name: 'fundInfo',
  initialState,
  reducers: {
    getFundInfo: (state,action: PayloadAction<FundState>) => {
      state.name = action.payload.name
      state.year = action.payload.year
      state.acronym = action.payload.acronym
      state.price = action.payload.price
      state.increaseByPorcent = action.payload.increaseByPorcent
      state.AUM = action.payload.AUM
      state.issueDate = action.payload.issueDate
      state.vintageRange = action.payload.vintageRange
      state.TER = action.payload.TER
      state.priceAtClose = action.payload.priceAtClose
      state.priceAtOpen = action.payload.priceAtOpen
      state.credits = action.payload.credits
      state.lastPurchase = action.payload.lastPurchase
      state.charts = action.payload.charts
    },
  },
})

// Action creators are generated for each case reducer function
export const { getFundInfo } = fundSlice.actions

export default fundSlice.reducer