require 'uuid'
class VideosController < ApplicationController
    def index
        videos = Video.all()
        render json: videos, except: [:updated_at]
    end

    def create
        video = Video.new(video_params)
        uid = UUID.new
        video.uid = uid.generate
        if video.save
            render json: {message: "Video Created", video: video, except: [:updated_at, :user_id]}
        end
    end

    def destroy
        video = Video.find_by('uid': params[:id])
        if !video.nil?
            video.destroy
            render json: {message: 'Video Removed'}
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :url, :user_id)
    end
end
