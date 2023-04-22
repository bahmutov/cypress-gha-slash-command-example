describe('Feature A', {tags: '@featureA'}, () => {
  it('works 1', {tags: '@sanity'}, () => {
    cy.wait(5_000)
  })

  it('works 2', () => {
    cy.wait(5_000)
  })
})
