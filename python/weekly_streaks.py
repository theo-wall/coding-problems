import datetime
import random

'''
At work we are adding "badges" to users profiles, one of the badges will be if a user has logged in at least once a calendar week for 3, 8, and 12 weeks in a row. We will be tracking
certain events triggered by the user when we authenticate their session (login, page refresh, etc.) to determine if they have been active at least once during the week. Below I've
created the function "generate_user_activity()" to generate dummy user data for "session" events over the last year. We need to determine the users longest streak so we can award them a 
medal in their profile. Events can happen multiple times in a single day, we want to see if the user has been active at least once in the week to count towards their streak.

Make a function "longest_weekly_streak" that we can use to calculate the users longest steak of being active.

- use the generate_user_activity function to create your dummy data. (currently set to 100 events over 500 days)
- data will be an array of UserActivity objects use the date for your calculations
- dates will be in datetime format
- must work for any number of events or period of time

'''


'''
mock user activity class
'''

random.seed(42)


class UserActivity:
    def __init__(self, type, sub_type, date):
        self.type = type
        self.sub_type = sub_type
        self.date = date


'''
generating random user_activity events for problem (date is the only one that matters)
'''


def generate_user_activity(number_of_activities, period_of_time):
    startDate = datetime.datetime.now()
    date_array = []

    for _ in range(number_of_activities):
        date_array.append(UserActivity('Start Session', 'login',
                                       startDate - datetime.timedelta(days=random.randint(1, period_of_time))))

    return date_array


'''
function to determine users longest streaks
'''


def longest_weekly_streak(user_activities):

    def convert_to_YYYYWW(activity):
        return int(str(activity.date.isocalendar()[0]) + str("{0:0=2d}".format(activity.date.isocalendar()[1])))

    year_week_sorted_activities = sorted(
        map(convert_to_YYYYWW, user_activities))

    streaks = []
    streakCounter = 0
    maxStreaks = 0

    for index in range(1, len(year_week_sorted_activities)):
        leadingDate = int(str(year_week_sorted_activities[index])[-2:])
        trailingDate = int(str(year_week_sorted_activities[index - 1])[-2:])

        if (leadingDate == 1):
            if ((leadingDate - trailingDate) == -51):  # If two consecutive weeks
                # If we want to be cute, we could have done somehting like (leadingDatge - trailingDate) % 51 == 1
                streakCounter += 1
            else:
                # streaks.append(streakCounter)
                maxStreaks = max([streakCounter, maxStreaks])
                streakCounter = 0
        else:
            if ((leadingDate - trailingDate) <= 1):
                if ((leadingDate - trailingDate) == 1):
                    streakCounter += 1
            else:
                # streaks.append(streakCounter)
                maxStreaks = max([streakCounter, maxStreaks])
                streakCounter = 0
    maxStreaks = max([streakCounter, maxStreaks])
    # if (len(streaks) == 0):
    #     streaks.append(streakCounter)

    # return sorted(streaks)[-1]
    return maxStreaks


# Generating dates
user_activities = generate_user_activity(100, 500)
# print(user_activities)

# printing longest streak
print(longest_weekly_streak(user_activities))
