// test/scam.router.test.ts
import { beforeAll, describe, expect, it, mock } from 'bun:test'

import { edenTreaty } from '@elysiajs/eden'
import { Elysia } from 'elysia'
import { scamList } from '../__mocks__/scam.mock'
import { setupTestDb } from './db/setupTestDb'

beforeAll(async () => {
    await setupTestDb()
})

describe('Scam', () => {
    it('return list of scam', async () => {
        
    })
})