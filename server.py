# -*- coding: utf-8 -*-

from wsgiref import simple_server


def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    return [b"GET"]


if __name__ == '__main__':
    """development purposes - not run by uwsgi"""
    httpd = simple_server.make_server('', 8000, application)
    sa = httpd.socket.getsockname()
    try:
        print "Serving HTTP on", sa[0], "port", sa[1], "..."
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()
