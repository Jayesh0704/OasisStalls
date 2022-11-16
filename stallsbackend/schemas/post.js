export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',  
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',  
      title: 'Category',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    // {
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
  ],
}
