import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    public home({ view }: HttpContextContract) {
        return view.render('welcome')
    }
    
    public about({ params }: HttpContextContract) {
        return params.name ? `This is ${params.name} about` : 'This is nothing'
    }
    
    public contact() {
        return 'This is contract page'
    }
}
