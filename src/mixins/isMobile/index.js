/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import Vue from 'vue'

const _isMobile = () => {
	console.log('_isMobile', !!(document.documentElement.clientWidth < 768))
	// check if content width is under 768px
    return document.documentElement.clientWidth < 768
}

const state = Vue.observable({ isMobile: _isMobile() })

const _onResize = () => {
	// Update mobile mode
	console.log('onResize')
	Vue.set(state, 'isMobile', _isMobile())
}

window.addEventListener('resize', _onResize)

window.mystate = state

export default {
	data() {
		return {
			isMobile: state.isMobile
		}
	}
}