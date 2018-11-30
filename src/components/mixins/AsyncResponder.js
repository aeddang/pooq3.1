import { Status } from '../../enums'

export default {
  data () {
    return {
      status: Status.None,
      asyncVM: null
    }
  },
  watch: {
    'asyncData.status' (status) {
      this.status = status
      switch (status) {
        case Status.Progress :
          this.onProgress()
          break
        case Status.Completed :
          this.onCompleted()
          break
        case Status.Error :
          this.onError()
          break
      }
    }
  },
  methods: {
    onCompleted: function () {
      console.log('onCompleted')
    },
    onProgress: function () {
      console.log('onProgress')
    },
    onError: function () {
      console.log('onErrors')
    }
  }
}
