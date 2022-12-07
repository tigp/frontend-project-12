export default {
  translation: {
    navBar: {
      chatLinks: 'Hexlet Chat',
      languageSelection: 'Language',
      ru: 'ру',
      en: 'en',
      logoutButton: 'Log out',
    },
    login: {
      header: 'Enter',
      nameField: 'Your nickname',
      passwordField: 'Your password',
      invalidData: 'Incorrect user name or password',
      loginButton: 'Log in',
      questionAboutAccount: 'No account?',
      registration: 'Registration',
    },
    registration: {
      header: 'registration',
      nameField: 'Username',
      passwordField: 'Password',
      confirmPasswordField: 'Confirm password',
      invalidData: 'The user exists',
      registrationButton: 'Log in',
    },
    chatPage: {
      channels: 'Channels',
      channelManagment: 'Channel managment',
      rename: 'Rename',
      delete: 'Delete',
      enterMessage: 'Enter the message...',
      sendButton: 'Send',
      counter: {
        messageCount_one: '{{count}} message',
        messageCount_other: '{{count}} messages',
      },
    },
    pageNotFound: {
      header: 'Page not found',
      link: 'But you can go to the main page',
    },
    modalAdd: {
      title: 'Create a new channel',
      nameOfChannel: 'Channel name',
      cancelButton: 'Cancel',
      sendButton: 'Send',
    },
    modalRename: {
      title: 'Rename the channel',
      nameOfChannel: 'Channel name',
      cancelButton: 'Cancel',
      sendButton: 'Send',
    },
    modalDelete: {
      title: 'Delete the channel',
      body: 'Are you sure?',
      cancelButton: 'Cancel',
      deleteButton: 'Delete',
    },
    errors: {
      required: 'Required field',
      min3: 'From 3 to 20 characters',
      min6: 'At least 6 characters',
      max20: 'From 3 to 20 characters',
      confPassword: 'Passwords must match',
      uniqueName: 'name of the channel have to unique',
    },
    toast: {
      createNotification: 'Channel created',
      renameNotification: 'Channel renamed',
      deleteNotification: 'Channel deleted',
      errorLoadingData: 'Error loading data',
      errorSendingMessage: "Can't send the message",
    },
  },
};
