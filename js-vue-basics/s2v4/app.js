const book = new Vue({
    el: '#book',
    data: {
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      summary: 'This is a summary of the Sirens of Titan.',
      showDetail: false
    },
    methods: {
        toggleDetails: function() {
            this.showDetail = !this.showDetail;
            // like a shorthand if statement - if the value is true, set it to false and vice versa
        }
    }
});