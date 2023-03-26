import {expect, test, describe} from 'vitest'
import {mount} from '@vue/test-utils'
import VotingOption from "../components/VotingOption.vue";

describe('VotingOption', () => {
    test('is disabled when disabled=false', () => {
        const wrapper = mount(VotingOption, {
            props: {
                title: 'title',
                enabled: true
            }
        })

        const radioButton = wrapper.find('#titleRadioButton')
        expect(radioButton.attributes().disabled).toBe(undefined)
    })

    test('is enabled when disabled=true', () => {
        const wrapper = mount(VotingOption, {
            props: {
                title: 'title',
                enabled: false
            }
        })

        const radioButton = wrapper.find('#titleRadioButton')
        expect(radioButton.attributes().disabled).toBe('')
    })

    test('sanitizes titles for ids', () => {
        const wrapper = mount(VotingOption, {
            props: {
                title: 'title with spaces',
                enabled: false
            }
        })

        expect(wrapper.find('#titlewithspacesRadioButton').exists()).toBe(true)
        expect(wrapper.find('#title with spacesRadioButton').exists()).toBe(false)
    })
})