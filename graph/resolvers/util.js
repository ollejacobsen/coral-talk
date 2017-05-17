/**
 * Decorates the typeResolver with the tags field.
 */
const decorateWithTags = (typeResolver) => {
  typeResolver.tags = ({tags = []}, _, {user}) => {
    if (user && (user.hasRoles('ADMIN') || user.hasRoles('MODERATOR'))) {
      return tags;
    }

    return tags.filter((tag) => tag.public);
  };
};

module.exports = {
  decorateWithTags
};