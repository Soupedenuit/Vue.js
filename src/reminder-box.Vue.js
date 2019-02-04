let reminder_template = `
<div id="reminder-box" class="opacity-zero">
  <form action="">
    <label for="time">set reminder time:
    </label>
    <div class="reminder-container">
      <input id="reminder-time-input" type="time" name="time"/>
    </div>

    <div class="reminder-container" id="reminder-colors">

        <div class="radio-container">
          <input type="radio" name="reminderColor" />
          <span class="checkmark" data-text-color="1"></span>
        </div>

        <div class="radio-container">
          <input type="radio" name="reminderColor" />
          <span class="checkmark" data-text-color="2"></span>
        </div>

        <div class="radio-container">
          <input type="radio" name="reminderColor" />
          <span class="checkmark" data-text-color="3"></span>
        </div>

        <div class="radio-container">
          <input type="radio" name="reminderColor" />
          <span class="checkmark" data-text-color="4"></span>
        </div>

        <div class="radio-container">
          <input type="radio" name="reminderColor" />
          <span class="checkmark" data-text-color="5"></span>
        </div>

    </div>

    <div class="reminder-container">
      <button type="button" id="reminder-box-btn">set</button>
      <input type="button" id="reminder-box-close-btn" class="material-icons close-btn" value="close" />
    </div>
  </form>
</div>
  `;

Vue.component('reminder-box', {
  //props: [],
  template: reminder_template,
  data: function() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
});

let vueReminderBox = new Vue({
  el: '#reminder-box-vue-instance',
  data: {}
});
