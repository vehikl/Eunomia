import {expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import VotingOptionsList from "../components/VotingOptionsList.vue";

test('should work as expected', async () => {
    const wrapper = mount(VotingOptionsList, {})
    const button = wrapper.find('#button')
    const textInput = wrapper.find('#textInput')

    await textInput.setValue('snickers')
    await button.trigger('click')

    expect(wrapper.find('#options').html()).to.contain('snickers')
})