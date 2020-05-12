
const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotFound = use('App/Exceptions/ResourceNotFoundException')
class AuthService {

  checkAccess(resource, user){

    if(!resource) {
      throw new ResourceNotFound();
    }

    if(user.id !== resource.user_id){
      throw new InvalidAccessException();
    }
  }
}

module.exports = new  AuthService();