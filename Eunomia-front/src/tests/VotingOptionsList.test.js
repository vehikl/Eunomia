import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import VotingOptionsList from "../components/VotingOptionsList.vue";

test('should work as expected', () => {
    const wrapper = mount(VotingOptionsList, {})
    expect(wrapper.text()).toContain('OPTION')
})