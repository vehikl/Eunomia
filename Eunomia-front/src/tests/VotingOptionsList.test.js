import {expect, test, describe} from 'vitest'
import {mount} from '@vue/test-utils'
import VotingOptionsList from "../components/VotingOptionsList.vue";
import VotingOption from "../components/VotingOption.vue";

describe('VotingOptionsList', () => {
    test('can add items to its list', async () => {
        const wrapper = mount(VotingOptionsList, {})
        const button = wrapper.find('#button')
        const textInput = wrapper.find('#textInput')

        await textInput.setValue('snickers')
        await button.trigger('click')

        expect(wrapper.find('#options').html()).to.contain('snickers')
    })

    test('does not allow empty names to be added', async () => {
        const wrapper = mount(VotingOptionsList, {})
        const button = wrapper.find('#button')
        const textInput = wrapper.find('#textInput')

        await textInput.setValue('')
        await button.trigger('click')

        expect(wrapper.findComponent(VotingOption).exists()).toBe(false)
    })

    test('does not allow names longer than 32 characters to be added', async () => {
        const wrapper = mount(VotingOptionsList, {})
        const button = wrapper.find('#button')
        const textInput = wrapper.find('#textInput')

        await textInput.setValue('this is a string that i am typing that i hope is longer than 32 characters')
        await button.trigger('click')

        expect(wrapper.findComponent(VotingOption).exists()).toBe(false)
    })

    test('does not allow duplicate items to be added to the list', async () => {
        const wrapper = mount(VotingOptionsList, {})
        const button = wrapper.find('#button')
        const textInput = wrapper.find('#textInput')

        await textInput.setValue('snickers')
        await button.trigger('click')

        await textInput.setValue('snickers')
        await button.trigger('click')

        expect(wrapper.findAllComponents(VotingOption).length).toBe(1)
    })

    test('clears text input when a new voting option is added', async () => {
        const wrapper = mount(VotingOptionsList, {})
        const button = wrapper.find('#button')
        const textInput = wrapper.find('#textInput')

        await textInput.setValue('snickers')
        await button.trigger('click')

        expect(textInput.element.value).toBe('')
    })
})
