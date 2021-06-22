import makeAddComment from './add-comment'
import makeHandleModeration from './handle-moderation'
import makeCommentsDb from '../data-access/comments-db'
import makeFakeComment from '../../__test__/fixtures/comment'
import makeDb from '../../__test__/fixtures/db'

describe('add comment', () => {
  let commentsDb
  beforeAll(() => {
    commentsDb = makeCommentsDb({ makeDb })
  })

  it('inserts comments in the database', async () => {
    const newComment = makeFakeComment()
    const handleModeration = makeHandleModeration({
      initiateReview: () => {}
    })
    const addComment = makeAddComment({
      commentsDb,
      handleModeration
    })
    const inserted = await addComment(newComment)
    expect(inserted).toMatchObject(newComment)
  })

})
