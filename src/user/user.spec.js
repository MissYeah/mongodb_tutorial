// var app = require('../server');
// var request = require('supertest');
// var should = require('should');
// var db = require('./../db');

// describe('/GET /users', () => {
//     before(() => db().catch((err) => console.log(err.message)));
//      describe('Success Cases', () => {
//         it('user must be Object', (done) => {
//             request(app)
//                 .get('/user')
//                 .end((err, res) => {
//                     res.body.should.be.instanceOf(Object);
//                     done();
//                 });
//         });
//     });
// });

// describe('/GET /user/:userId', () => {
//     var userid = '6034b4db32796c2b4263e996';
//     before(() => db().catch((err) => console.log(err.message)));
//     describe('Success Case', () => {
//         it('GET userId: ' + userid, (done) => {
//             request(app)
//                 .get('/user/' + userid)
//                 .end((err, res) => {
//                     res.body.user.should.have.property('_id', userid);
//                     done();        
//                 });
//         })
//     });
//     describe('Failed Case', () => {
//         it('404 - Cannot find userId', (done) => {
//             request(app)
//                 .get('/user/122')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.should.have.property('err', 'invalid userId');
//                     done();        
//                 });
//         });
//         it('400 - Invalid userId', (done) => {
//             request(app)
//                 .get('/user/One')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.should.have.property('err', 'invalid userId');
//                     done();        
//                 });
//         });
//     });
// });

// describe('/POST /user', () => {
//     before(() => db().catch((err) => console.log(err.message)));
//     describe('Success Case', () => {
//         it('PUT user success', (done) => {                    
//             var username = "Janet";
//             var user = {
//                 "username": username,
//                 "name": {
//                     "first": "Jane",
//                     "last": "Kim"
//                 },
//                 "age": 20
//             };
//             var userid = '';
//             console.log('start');
//             request(app)
//                 .post('/user')
//                 .send(user)
//                 .expect(201)
//                 .end((err, res) => {
//                     body = res.body;
//                     userid = body.user._id;                    
//                     body.user.should.have.property('username', username);

//                     if(userid) {
//                         request(app)
//                         .delete('/user/' + userid)
//                         .expect(200)
//                         .end(done);
//                     } else {
//                         done();
//                     }
//                 });            
//         });
//     });
//     describe('Failed Case', () => {
//         it('400 - When username not existed', (done) => {
//             var user = {
//                 "name": {
//                     "first": "Jane",
//                     "last": "Kim"
//                 },
//                 "age": 20
//             };
//             request(app)
//                 .post('/user')
//                 .send(user)
//                 .expect(400)
//                 .end((err, res) => {
//                     body = res.body;
//                     body.should.have.property('err', 'username is required');
//                     done();
//                 });
//         });
//     });
// });

// describe('/DELETE /user/:userId', () => {
//     before(() => db().catch((err) => console.log(err.message)));
//     describe('Success case', () => {
//         it('Delete user', (done) => {
//         var username = "Kimberly";
//         var user = {
//             "username": username,
//             "name": {
//                 "first": "Jane",
//                 "last": "Kim"
//             },
//             "age": 20
//         };
//         var userid = '';
//         console.log('start');
//         request(app)
//             .post('/user')
//             .send(user)
//             .expect(201)
//             .end((err, res) => {
//                 body = res.body;
//                 userid = body.user._id;                    
//                 body.user.should.have.property('username', username);

//                 if(userid) {
//                     request(app)
//                     .delete('/user/' + userid)
//                     .expect(200)
//                     .end(done);
//                 } else {
//                     done();
//                 }
//             });
//         })
//     })
//     describe('Failed Case', () => {
//         it('404 - Cannot find userId', (done) => {
//             request(app)
//                 .delete('/user/122')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.should.have.property('err', 'invalid userId');
//                     done();        
//                 });
//         });
//         it('400 - Invalid userId', (done) => {
//             request(app)
//                 .delete('/user/One')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.should.have.property('err', 'invalid userId');
//                     done();        
//                 });
//         });
//     })
// })

// describe('/PUT /user/:userId', () => {
//     describe('Success Case', () => {
//         it('PUT user', (done) => {
//             var username = "Lana1";
//             var user = {
//                 "username": username,
//                 "name": {
//                     "first": "Jane",
//                     "last": "Kim"
//                 },
//                 "age": 20
//             };
//             var userid = '';
//             console.log('start');
//             request(app)
//                 .post('/user')
//                 .send(user)
//                 .expect(201)
//                 .end((err, res) => {
//                     body = res.body;
//                     userid = body.user._id;                    
//                     body.user.should.have.property('username', username);

//                     if(userid) {
//                         request(app)
//                         .put('/user/' + userid)
//                         .send({"age": 32})
//                         .expect(200)
//                         .end((err, res) => {
//                             res.body.user.should.have.property('age', '32');
//                         });
//                     } else {
//                         done();
//                     }
//                 });
//         })
//     })
// })