
module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { 
                        key: 'Content-Security-Policy',
                        value: "frame-src 'self' https://www.youtube.com",
                    },
                ],
            },
        ]
    },
}