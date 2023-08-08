import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async me({ response, auth }: HttpContextContract) {
    try {
      return auth.user;
    } catch (error) {
      response.send('Credentials missing')
    }
  }
}
