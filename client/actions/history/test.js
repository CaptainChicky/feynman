// local imports
import {
    commit,   COMMIT,
    goto,     GOTO,
    undo,     UNDO,
    redo,     REDO,
} from 'actions/history'

describe('Action Creators', () => {
    describe('History', () => {
        test('can commit the store with a message', () => {
            expect(commit('hello world')).toEqual({
                type: COMMIT,
                payload: 'hello world'
            })
        })

        test('can goto a specific commit', () => {
            expect(goto(123)).toEqual({
                type: GOTO,
                payload: 123
            })
        })

        test('can undo history', () => {
            expect(undo()).toEqual({
                type: UNDO,
            })
        })

        test('can redo history', () => {
            expect(redo()).toEqual({
                type: REDO,
            })
        })
    })
})
