import jwt
import unittest

class TestJWTDecoding(unittest.TestCase):
    def test_invalid_signature(self):
        with self.assertRaises(jwt.InvalidTokenError) as context:
            # Attempt to decode the token with a different secret key
            jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', key='incorrect_secret', algorithms=['HS256'])

        self.assertEqual(str(context.exception), 'Signature verification failed')

if __name__ == '__main__':
    unittest.main()
