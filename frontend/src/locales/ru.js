export default {
  translation: {
    navBar: {
      chatLinks: 'Hexlet Chat',
      languageSelection: 'Язык',
      ru: 'ру',
      en: 'en',
      logoutButton: 'Выйти',
    },
    login: {
      header: 'Войти',
      nameField: 'Ваш ник',
      passwordField: 'Пароль',
      invalidData: 'Неверные имя пользователя или пароль',
      loginButton: 'Войти',
      questionAboutAccount: 'Нет акаунта?',
      registration: 'Регистрация',
    },
    registration: {
      header: 'Регистрация',
      nameField: 'Имя пользователя',
      passwordField: 'Пароль',
      confirmPasswordField: 'Подтвердите пароль',
      invalidData: 'Пользователь существует',
      registrationButton: 'Войти',
    },
    chatPage: {
      channels: 'Каналы',
      channelManagment: 'Управление каналом',
      rename: 'Переименовать',
      delete: 'Удалить',
      enterMessage: 'Введите сообщение...',
      sendButton: 'Отправить',
      counter: {
        messageCount_zero: '{{count}} сообщений',
        messageCount_one: '{{count}} сообщение',
        messageCount_few: '{{count}} сообщения',
        messageCount_many: '{{count}} сообщений',
      },
    },
    pageNotFound: {
      header: 'Страница не найдена',
      link: 'Но вы можете перейти на главную страницу',
    },
    modalAdd: {
      title: 'Создать новый канал',
      nameOfChannel: 'Имя канала',
      cancelButton: 'Отменить',
      sendButton: 'Отправить',
    },
    modalRename: {
      title: 'Переименовать канал',
      nameOfChannel: 'Имя канала',
      cancelButton: 'Отменить',
      sendButton: 'Отправить',
    },
    modalDelete: {
      title: 'Удалить канал',
      body: 'Уверены?',
      cancelButton: 'Отменить',
      deleteButton: 'Удалить',
    },
    errors: {
      required: 'Обязательное поле',
      min3: 'От 3 до 20 символов',
      min6: 'Не менее 6 символов',
      max20: 'От 3 до 20 символов',
      confPassword: 'Пароли должны совпадать',
      uniqueName: 'Должно быть уникальным',
    },
    toast: {
      createNotification: 'Канал создан',
      renameNotification: 'Канал переименован',
      deleteNotification: 'Канал удалён',
      errorLoadingData: 'Ошибка при загрузке данных',
      errorSendingMessage: 'Ошибка при отправке сообщения'
    },
  },
};
