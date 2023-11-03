import jwt
import unittest

class TestJWTDecoding(unittest.TestCase):
    def test_invalid_signature(self):
        with self.assertRaises(jwt.InvalidTokenError) as context:
            # Attempt to decode the token with a different secret key
            jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NjUwIiwibmFtZSI6InNhaSIsImlhdCI6MjAyM30.2IBo2xmivgJyDB-NOsljAOaqmz2AMWdSL3Wcp6wLP8M', key='incorrect_secret', algorithms=['HS256'])

        self.assertEqual(str(context.exception), 'Signature verification failed')

if __name__ == '__main__':
    unittest.main()
