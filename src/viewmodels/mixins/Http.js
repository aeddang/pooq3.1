import { Status } from '../../enums'

export default {
  data () {
    return {
      status: Status.None,
      axiosCancel: null,
      errorData: null
    }
  },
  methods: {
    loading () {
      this.status = Status.Progress
    },
    completed () {
      console.log('Http onCompleted')
      this.status = Status.Completed
    },
    cancel () {
      if (this.axiosCancel) this.axiosCancel()
      this.status = Status.Canceled
    },
    error (error) {
      this.errorData = error
      this.status = Status.Error
    }
  }
}
