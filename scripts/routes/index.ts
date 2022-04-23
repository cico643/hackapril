import { NativeRouter, NativeStackRouter, Route } from '@smartface/router';
import * as Pages from 'pages';
import Application from '@smartface/native/application';

Application.on('backButtonPressed', () => {
    NativeRouter.getActiveRouter()?.goBack();
});

const router = NativeRouter.of({
  path: '/',
  isRoot: true,
  routes: [
    NativeStackRouter.of({
      path: '/pages',
      routes: [
        Route.of<Pages.PgHome>({
          path: '/pages/pgHome',
          build(router, route) {
            return new Pages.PgHome(router, route);
          }
        }),
        NativeStackRouter.of({
          path: '/pages/pgCommits',
          to: '/pages/pgCommits/main',
          modal: true,
          modalType: 'bottom-sheet',
          bottomSheetOptions: {
            cornerRadius: 20,
            detents: ['large'],
            isGrabberVisible: true
          },
          routes: [
            Route.of<Pages.PgCommits>({
              path: '/pages/pgCommits/main',
              build(router, route) {
                return new Pages.PgCommits(router, route);
              }
            })
          ]
        })
      ]
    })
  ]
});

export default router;
