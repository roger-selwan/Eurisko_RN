import {COLORS} from 'src/theme';

/*
In this file we will define our structure roots
*/


export const loginRoot = {
  root: {
    stack: {
      id: 'LOGIN_STACK',
      children: [
        {
          component: {
            name: 'Login',
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  },
};

const HOME_STACK = {
  stack: {
    id: 'HOME_STACK',
    children: [
      {
        component: {
          name: 'Home',
          options: {
            topBar: {
              visible: true,
              title: {
                text: 'Home',
                alignment: 'center',
                color: COLORS.dark,
              },
              background: {
                color: COLORS.lightBlue,
              },
            },
          },
        },
      },
    ],
  },
};

export const mainRoot = {
  root: {
    ...HOME_STACK
  },
};
