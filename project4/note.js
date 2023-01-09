class Note {
    constructor(id, title, content, color = '#f7e1a8', isPinned = false, ) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.color = color;
      this.isPinned = isPinned;
      this.date = new Date().toDateString();
      this.tags = this.tags;
    }
  }
