import defaultSettings from '@/settings'

const { showFooter, footerTxt, caseNumber } = defaultSettings

const state = {
  showSettings: false,
  showFooter: showFooter,
  footerTxt: footerTxt,
  caseNumber: caseNumber
}

export default {
  state
}
