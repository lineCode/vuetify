require('../../stylus/components/_cards.styl')

import Themeable from '../../mixins/themeable'
import Routable from '../../mixins/routable'

export default {
  name: 'v-card',

  mixins: [Routable, Themeable],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    tile: Boolean
  },

  computed: {
    classes () {
      return {
        'card': true,
        'card--flat': this.flat,
        'card--horizontal': this.horizontal,
        'card--hover': this.hover,
        'card--raised': this.raised,
        'card--tile': this.tile,
        'theme--light': this.light,
        'theme--dark': this.dark
      }
    },
    styles () {
      const style = {
        height: isNaN(this.height) ? this.height : `${this.height}px`
      }

      if (this.img) {
        style.background = `url(${this.img}) center center / cover no-repeat`
      }

      return style
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    data.style = this.styles

    return h(tag, data, this.$slots.default)
  }
}
