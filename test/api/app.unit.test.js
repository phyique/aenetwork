const app = require('../../app');
const request = require('supertest');

let server = null;
const start = (port) => {
    try {
       server = app.listen(port, () => {
            console.log(`Api running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

start(3333);

describe('api should save and return some values', () => {
    test("GET /signup", (done) => {
        request(app)
            .post("/signup")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });

    test("GET /signup", (done) => {
        request(app)
            .post("/login")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });

    test("GET api/shows", (done) => {
        request(app)
            .get("/api/shows")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });

    test("POST api/shows", (done) => {
        request(app)
            .get("/api/shows")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });

    test("PUT api/shows", (done) => {
        request(app)
            .put("/api/shows")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });

    test("DELETE api/shows", (done) => {
        request(app)
            .put("/api/shows/001")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            });
    });
});

afterAll((done) => {
    return server.close(done)
})
