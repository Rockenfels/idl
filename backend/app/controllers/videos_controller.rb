class VideosController < ApplicationController
    def index
        videos = Video.all()
        render json: videos, except: [:updated_at]
    end

    def create
        video = Video.new(video_params)
        #add code to include user id upon creation

        if video.save
            render json: video, except: [:updated_at, :user_id]
        else
            render json: {status: "error", errors: [video.errors.full_messages]}
        end
    end

    def show
        video = Video.find_by('id': params[:id])
        if !video.nil? 
            render json: video, except: [:updated_at, :user_id]
        else
            render json: {message: 'video not found'}
        end
    end

    def update
        video = Video.find_by('id': params[:id])
        if !video.empty?
            video.update(video_params)
            render json: video, except: [:updated_at, :user_id]
        else
            render json: {message: "error - invalid video data"}
        end
    end

    def destroy
        video = Video.find_by('id': params[:id])
        if !video.nil?
            video.destroy
            render json: {message: 'video successfully deleted'}
        else
            render json: {message: 'couldn\'t find video'}
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :email, :password)
    end
end
