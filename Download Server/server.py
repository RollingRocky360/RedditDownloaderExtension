import io
import os
from urllib import parse

from yt_dlp import YoutubeDL
from yt_dlp.utils import DownloadError
from flask import Flask, request, send_file


app = Flask(__name__)


@app.route('/download')
def download():
    downloadUrl = parse.unquote(request.args.get('url'))

    opts = {'outtmpl': '%(title)s.%(ext)s', 'trim_file_name': 30}
    try:
        with YoutubeDL(opts) as dl:
            info = dl.extract_info(downloadUrl)

        filename = dl.prepare_filename(info)
        with open(filename, 'rb') as file:
            filebytes = io.BytesIO(file.read())
        os.remove(filename)

        return send_file(filebytes, as_attachment=True, download_name=filename)
    except DownloadError:
        return f"<h3>{info['title']}</h3>"


if __name__ == '__main__':
    app.run(debug=True)
