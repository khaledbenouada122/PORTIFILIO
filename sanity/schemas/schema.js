import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import experience from './experience'
import skill from './skill'
import project from './project'
import social from './social'
import pageInfo from './pageInfo'



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    skill,
    project,
    social

  ]),
})
