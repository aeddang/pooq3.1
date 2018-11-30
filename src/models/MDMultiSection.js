import { TypeValidation } from '../libs/utils'
const typeValidation = new TypeValidation()

export const SectionType = {
  OnContent: 'on-content',
  Ondisplay: 'on-display',
  OnNavigation: 'on-navigation',
  OnClick: 'on-click',
  OnViewmore: 'on-viewmore',
  OnRadio: 'on-radio',
  OnLongpressdelete: 'on-longpressdelete'
}
/* from GNB */
export class MultiSectionData {
  constructor (originData) {
    this.title = originData.title
    this.uicode = originData.uicode
    this.eventlist = originData.eventlist.map(d => { return new EventData(d) })
  }
  getBodyData () {
    return this.eventlist[1]
  }
}

/* from API */
export class SectionListData {
  constructor (originData) {
    this.type = typeValidation.getStringValue(originData.type)
    this.version = typeValidation.getStringValue(originData.version)
    this.gen_time = typeValidation.getStringValue(originData.gen_time)
    let lists = typeValidation.getArrayValue(originData, 'multisectionlist')
    this.multisectionlist = lists.map(d => { return new SectionData(d) })
  }
}

export class SectionData {
  constructor (originData) {
    this.type = typeValidation.getStringValue(originData.type)
    this.force_refresh = typeValidation.getStringValue(originData.force_refresh)
    this.cell_type = typeValidation.getStringValue(originData.cell_type)
    this.bg_color = typeValidation.getStringValue(originData.bg_color)
    this.icon = typeValidation.getStringValue(originData.icon)
    this.title = typeValidation.getStringValue(originData.title)
    this.view_more = typeValidation.getStringValue(originData.view_more)
    this.eventlist = typeValidation.getArrayValue(originData, 'eventlist').map(d => { return new EventData(d) })
  }
  getBodyData () {
    return this.eventlist.find(d => { return d.type === SectionType.OnContent })
  }
}

export class EventData {
  constructor (originData) {
    this.type = typeValidation.getStringValue(originData.type)
    this.url = typeValidation.getProtocolValue(originData.url)
    this.method = typeValidation.getStringValue(originData.method, 'get')
    this.bodylist = typeValidation.getArrayValue(originData, 'bodylist').map(d => {
      let va = d.split(':')
      return { key: va[0], value: va[1] }
    })
    this.add_common_params = typeValidation.getBoolValue(originData.add_common_params)
    this.add_credential = typeValidation.getBoolValue(originData.add_credential)
  }
}
