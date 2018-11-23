import { TypeValidation } from '../libs/utils'
const typeValidation = new TypeValidation()

export class PooqZoneData {
  constructor (originData) {
    this.pooqzoneid = typeValidation.getStringValue(originData.pooqzoneid)
    this.pooqzonetype = typeValidation.getStringValue(originData.pooqzonetype)
    this.targetdomain = typeValidation.getStringValue(originData.targetdomain)
    this.productimage = typeValidation.getStringValue(originData.productimage)
    this.BannerLinkUrl = typeValidation.getStringValue(originData.BannerLinkUrl)
    this.BannerImageUrl = typeValidation.getStringValue(originData.BannerImageUrl)
    this.merchantMessage = typeValidation.getStringValue(originData.merchantMessage)
    this.productMessage1 = typeValidation.getStringValue(originData.productMessage1)
    this.productMessage2 = typeValidation.getStringValue(originData.productMessage2)
    this.buttonMessage = typeValidation.getStringValue(originData.buttonMessage)
    this.producttype = typeValidation.getStringValue(originData.producttype)
    this.agencyname = typeValidation.getStringValue(originData.agencyname)
    this.pincode = typeValidation.getStringValue(originData.pincode)
    this.footertext = typeValidation.getStringValue(originData.footertext)
    this.footerimage = typeValidation.getStringValue(originData.footerimage)
    this.footerlink = typeValidation.getStringValue(originData.footerlink)
    this.isPlayycomic = typeValidation.getStringValue(originData.isPlayycomic)
    this.isplayymovie = typeValidation.getStringValue(originData.isplayymovie)
    this.IP = typeValidation.getStringValue(originData.IP)
    this.count = typeValidation.getStringValue(originData.count)
    const originLists = typeValidation.getArrayValue(originData, 'list')
    this.lists = originLists.map(data => { return new OrderData(data) })
  }
}

export class OrderData {
  constructor (originData) {
    this.OrderNumber = typeValidation.getStringValue(originData.OrderNumber)
    this.ImageUrl = typeValidation.getStringValue(originData.ImageUrl)
    this.pooqzoneType = typeValidation.getStringValue(originData.pooqzoneType)
    this.Alt = typeValidation.getStringValue(originData.Alt)
    this.Type = typeValidation.getStringValue(originData.Type)
    this.LinkUrl = typeValidation.getStringValue(originData.LinkUrl)
  }
}
